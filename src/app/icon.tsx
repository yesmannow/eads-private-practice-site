import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#7C3AED',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FBBF24',
          borderRadius: '50%',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified blazing star icon */}
          <rect x="11" y="10" width="2" height="8" fill="#FBBF24" rx="1" />
          <circle cx="12" cy="7" r="1.5" fill="#FBBF24" />
          <circle cx="10" cy="8" r="1" fill="#FBBF24" />
          <circle cx="14" cy="8" r="1" fill="#FBBF24" />
          <circle cx="12" cy="11" r="1.8" fill="#FBBF24" />
          <circle cx="9.5" cy="11.5" r="1.2" fill="#FBBF24" />
          <circle cx="14.5" cy="11.5" r="1.2" fill="#FBBF24" />
          <ellipse cx="9.5" cy="15" rx="1.5" ry="3" fill="#10B981" opacity="0.9" />
          <ellipse cx="14.5" cy="15" rx="1.5" ry="3" fill="#10B981" opacity="0.9" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
