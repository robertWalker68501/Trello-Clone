import Navbar from '@/components/shared/navigation/Navbar';

const Header = () => {
  return (
    <header className='backfrop-blur-sm sticky top-0 z-50 border-b bg-white/80'>
      <div className='container mx-auto px-4 py-3 sm:py-4'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
