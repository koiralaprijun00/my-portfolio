import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <Link 
        href="https://www.behance.net" 
        className="text-gray-600 hover:text-blue-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Behance
      </Link>
      <Link 
        href="https://dribbble.com" 
        className="text-gray-600 hover:text-pink-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dribbble
      </Link>
    </div>
  );
};

export default SocialLinks; 