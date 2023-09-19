export default function PageHeader({pageTitle}) {
    return (
        <div className='title-header py-6 text-center md:text-left w-full max-w-xs md:max-w-xl z-10'>
          <h1 className="text-7xl lg:text-8xl text-black font-semibold">{pageTitle}</h1>
        </div>
      );
}