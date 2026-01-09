import React from 'react';

interface UserAvatarProps {
  imageUrl: string;
  maxRadius: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, maxRadius }) => {
  const avatarSize = (maxRadius * 2)-8;
  
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 z-10">
      <div 
        className="rounded-full overflow-hidden"
        style={{
          width: `${avatarSize}px`,
          height: `${avatarSize}px`,
        }}
      >
        <img
          src={imageUrl}
          alt="User"
          className="w-full h-full object-cover"
          style={{
            objectPosition: 'center bottom'
          }}
        />
      </div>
    </div>
  );
};

export default UserAvatar;