// import Image from 'next/image';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Menú', href: '/menu' },
  { name: 'Delivery', href: '#' },
  { name: 'Sobre Nosotros', href: '#' },
];

const Header = () => {
  return (
    <div>
      <div className="relative bg-[white]">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-[white] pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <h1>Header</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
