interface StatusIndicatorProps {
  status: 'available' | 'busy' | 'offline';
  label: string;
}

export function StatusIndicator({ status, label }: StatusIndicatorProps) {
  const statusColors = {
    'available': 'bg-accent-green-500',
    'busy': 'bg-accent-blue-500',
    'offline': 'bg-gray-400'
  };

  return (
    <div 
      className="flex items-center space-x-2" 
      role="status" 
      aria-label={`Status: ${label}`}
    >
      <span 
        className={`h-2 w-2 rounded-full ${statusColors[status]} animate-pulse`}
        aria-hidden="true"
      />
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </div>
  );
}
