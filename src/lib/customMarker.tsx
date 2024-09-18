import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import { Icon, LucideProps, Luggage } from 'lucide-react'; // Import Lucide icon type
import { cn } from './utils';

export const createCustomMarker = (
  IconComponent: React.FC<LucideProps>,
  className?: string
) => {
  const iconSVG = renderToString(<IconComponent size={14} />);

  return L.divIcon({
    html: `<div class="${cn(
      'flex h-7 w-7 items-center justify-center p-[2px] box-content',
      className
    )}">${iconSVG}</div>`,
    className: '',
  });
};

export const luggageIcon = createCustomMarker(Luggage, 'rounded-full border-[1px] border-primary bg-background text-primary');

