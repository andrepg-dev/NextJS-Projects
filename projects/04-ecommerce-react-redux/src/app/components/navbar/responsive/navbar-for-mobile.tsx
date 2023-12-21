import { LinkElement, OPTIONS_LINK_ICON } from '../options-icons-navbar';

export const NavBarResponsive = () => {
  return (
    <nav className='flex lg:hidden w-full bg-[#121a2d] text-white px-mobile md:px-medium '>
      <section className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          {OPTIONS_LINK_ICON.slice(0, 2)
            .reverse()
            .map((value, index) => (
              <LinkElement
                key={index}
                route={value.route}
                tooltip={value.tooltip}
              >
                {value.icon}
              </LinkElement>
            ))}
        </div>

        <div className='flex items-center'>
          {OPTIONS_LINK_ICON.slice(2, 4).map((value, index) => (
            <LinkElement
              key={index}
              route={value.route}
              tooltip={value.tooltip}
            >
              {value.icon}
            </LinkElement>
          ))}
        </div>
      </section>
    </nav>
  );
};
