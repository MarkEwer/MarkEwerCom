import React, { useState } from 'react';

const SharePost: React.FC = () => {
  const [showCopied, setShowCopied] = useState(false);

  const copyCurrentUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/blog/')) {
      // Blog post detected
      // You can add analytics or other logic here if needed
    }
  }, []);

  return (
    <div className="share-post" style={{ margin: '1rem 0', display: 'flex', justifyContent: 'flex-end' }}>
      <button
        onClick={copyCurrentUrl}
        className="share-button"
        title="Copy link to share this post"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--vp-c-brand)',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {showCopied ? 'Copied!' : 'Share'}
      </button>
    </div>
  );
};

export default SharePost;
