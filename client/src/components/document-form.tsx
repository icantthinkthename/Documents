import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DocumentFormData, documentFormSchema } from "@shared/schema";
import { uploadFile, saveDocumentMetadata } from "@/lib/firebase";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LoaderCircle } from "lucide-react";

interface DocumentFormProps {
  userId: number;
}

export default function DocumentForm({ userId }: DocumentFormProps) {
  const [filePreview, setFilePreview] = useState<{
    file: File | null;
    name: string;
    size: string;
  }>({
    file: null,
    name: "",
    size: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<DocumentFormData>({
    resolver: zodResolver(documentFormSchema),
    defaultValues: {
      documentType: "",
      reasonDetails: "",
      file: undefined,
    },
  });
  
  const documentTypes = [
    { value: "resignation", label: "Resignation Letter" },
    { value: "leave", label: "Leave Request" },
    { value: "medical", label: "Medical Certificate" },
    { value: "expense", label: "Expense Claim" },
    { value: "appraisal", label: "Performance Appraisal" },
    { value: "other", label: "Other" },
  ];
  
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    
    if (selectedFile) {
      form.setValue("file", selectedFile, { shouldValidate: true });
      
      setFilePreview({
        file: selectedFile,
        name: selectedFile.name,
        size: formatFileSize(selectedFile.size),
      });
    }
  };
  
  const handleRemoveFile = () => {
    form.setValue("file", undefined, { shouldValidate: true });
    form.trigger("file");
    setFilePreview({
      file: null,
      name: "",
      size: "",
    });
    // Reset file input
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };
  
  const handleChooseFile = () => {
    document.getElementById("fileInput")?.click();
  };
  
  const handleReset = () => {
    if (form.formState.isDirty || filePreview.file) {
      if (confirm("Are you sure you want to reset the form? All entered data will be lost.")) {
        form.reset();
        handleRemoveFile();
      }
    }
  };
  
  const onSubmit = async (data: DocumentFormData) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Upload file to Firebase Storage
      const filePath = `documents/${userId}/${Date.now()}_${data.file.name}`;
      const fileUrl = await uploadFile(data.file, filePath);
      
      // Save document metadata to Firestore
      const documentData = {
        userId,
        documentType: data.documentType,
        reasonDetails: data.reasonDetails,
        fileName: data.file.name,
        fileUrl,
        fileSize: data.file.size,
        fileType: data.file.type
      };
      
      const documentId = await saveDocumentMetadata(documentData);
      
      // Also save to our backend
      await apiRequest("POST", "/api/documents", {
        ...documentData,
        id: documentId
      });
      
      toast({
        title: "Success",
        description: "Document submitted successfully!",
        variant: "default",
      });
      
      // Reset form after successful submission
      form.reset();
      handleRemoveFile();
    } catch (error) {
      console.error("Error submitting document:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-5 mb-6">
        <div className="bg-primary rounded-full p-4 flex items-center justify-center w-16 h-16">
          <FileText className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-primary">Document</h1>
          <p className="text-gray-600">Fill the required fields below to apply</p>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-lg font-medium text-primary">Document Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full px-4 py-3 bg-neutral rounded-md">
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {documentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-accent text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="reasonDetails"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-lg font-medium text-primary">Reason Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter the details here..."
                    className="resize-y block w-full px-4 py-3 bg-neutral rounded-md focus:ring-2 focus:ring-secondary text-primary"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-accent text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="file"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-lg font-medium text-primary">
                  Attach handover document (pdf, jpg, docx or any other format)
                </FormLabel>
                <div className="flex items-center gap-4">
                  <Button 
                    type="button" 
                    onClick={handleChooseFile}
                    className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Choose File
                  </Button>
                  <Input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      handleFileChange(e);
                    }}
                    {...field}
                  />
                  <span className="text-gray-500 truncate max-w-md">
                    {filePreview.file ? filePreview.name : "No file chosen"}
                  </span>
                </div>
                <FormMessage className="text-accent text-sm" />
                
                {filePreview.file && (
                  <div className="mt-4 p-4 border border-secondary rounded-md bg-neutral/50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-secondary" />
                      <div className="flex-1">
                        <p className="font-medium text-primary truncate">{filePreview.name}</p>
                        <p className="text-sm text-gray-500">{filePreview.size}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleRemoveFile}
                        className="text-accent hover:text-accent/80 focus:outline-none"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                )}
              </FormItem>
            )}
          />
          
          <div className="flex gap-4 mt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 sm:flex-none sm:min-w-[200px] px-6 py-4 bg-secondary text-white rounded-md hover:bg-secondary hover:opacity-90 transition-colors"
            >
              {isSubmitting ? (
                <LoaderCircle className="animate-spin h-5 w-5 mr-1" />
              ) : (
                "Submit"
              )}
            </Button>
            
            <Button
              type="button"
              onClick={handleReset}
              className="flex-1 sm:flex-none sm:min-w-[200px] px-6 py-4 bg-white text-accent border border-accent rounded-md hover:bg-neutral/50 transition-colors"
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
