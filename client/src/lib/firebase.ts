import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

/**
 * Upload a file to Firebase Storage
 * @param file The file to upload
 * @param path The path in storage to upload to
 * @returns The download URL of the uploaded file
 */
export async function uploadFile(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
}

/**
 * Save document metadata to Firestore
 * @param documentData The document metadata to save
 * @returns The document ID
 */
export async function saveDocumentMetadata(documentData: any): Promise<string> {
  const docRef = await addDoc(collection(db, 'documents'), {
    ...documentData,
    createdAt: new Date()
  });
  return docRef.id;
}

/**
 * Get documents for a user
 * @param userId The user ID
 * @returns Array of documents
 */
export async function getUserDocuments(userId: number): Promise<any[]> {
  const q = query(
    collection(db, 'documents'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  
  const querySnapshot = await getDocs(q);
  const documents: any[] = [];
  
  querySnapshot.forEach((doc) => {
    documents.push({
      id: doc.id,
      ...doc.data()
    });
  });
  
  return documents;
}

export { storage, db };
