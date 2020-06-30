import * as React from 'react';

interface Props {
  errors?: Record<string, string>
};

const Feedback: React.FC<Props> = ({ errors }) => {
  if (Object.keys(errors).length === 0) {
    return (null);
  }

  return (
    <ul className="feedback">
      {
        Object.values(errors).map(e => (
          <li key={e}>{e}</li>
        ))
      }
    </ul>
  );
};

export default Feedback;