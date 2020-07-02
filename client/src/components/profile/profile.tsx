import React, { FunctionComponent } from 'react';

interface Props {
  user?: Profile
}

interface Profile {
  name: string,
  level: number
}

const Profile: FunctionComponent<Props> = ({ user }) => {
  if (!user) {
    return (null);
  }

  const { name, level } = user;

  return (
    <div className="profile">
      <h1>{name} (level {level})</h1>
    </div>
  );
}

export default Profile;