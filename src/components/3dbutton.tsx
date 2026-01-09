'use client';

interface ThreeDButtonProps {
  children: React.ReactNode;
  textColor?: string;
  onClick?: () => void;
}

export default function ThreeDButton({ children, textColor = "text-white", onClick }: ThreeDButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${textColor} px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto`}
      style={{ 
        backgroundColor: '#f46c44',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)'
      }}
    >
      {children}
    </button>
  );
}
