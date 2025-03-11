interface UserProfileProps {
  user: {
    displayName: string;
    profileImage: string;
  };
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-right">
        <h2 className="text-lg font-semibold text-primary">Hi! {user.displayName}</h2>
      </div>
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
        <img 
          src={user.profileImage} 
          alt="Profile picture"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
