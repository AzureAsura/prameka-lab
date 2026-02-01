// 1. Definisi Type/Interface
interface FeatureItem {
  category: string;
  title: string;
  description: string;
  image: string;
}

interface FeatureCardProps {
  item: FeatureItem;
}



export const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => (
  <div className="group relative h-[450px] w-full rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">

    <div className="absolute inset-0">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent" />
    </div>

    <div className="absolute bottom-0 p-6 flex flex-col justify-end h-full w-full">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
        {item.category}
      </span>
      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
        {item.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {item.description}
      </p>
    </div>
  </div>
);