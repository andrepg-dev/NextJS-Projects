import { ContactInfo } from '@/app/components/contact/card';

function CreateContactInfo(
  dirrecion: string[],
  telefono: string[],
  horario: string[],
  soporteTecnico?: string[]
): Array<ContactInfo> {
  return [
    {
      title: 'Direccion',
      content: dirrecion,
    },
    {
      title: 'Telefono',
      content: [
        ...telefono.map((item, index) => (
          <a key={index} href={`tel:${item}`} className='hover:border-b '>
            {item}
          </a>
        )),
      ],
    },
    {
      title: 'Horario de Trabajo',
      content: horario,
    },
    {
      title: 'Email',
      content: [
        <a href='mailto:motor@stockware.ru' className='hover:border-b  '>
          @info@czmobile.com
        </a>,
      ],
    },
    ...(soporteTecnico
      ? [{ title: 'Soporte Ténico', content: soporteTecnico }]
      : []),
  ];
}

const Tegucigalpa = CreateContactInfo(
  ['Torre Metrópolis bulevar', 'Suyapa local C204', 'Tegucigalpa'],
  ['+504 9688-1811', '+504 2213-0298'],
  ['Lunes a Sábado:', '9:30am a 7:00pm']
);

const SanPedroSula = CreateContactInfo(
  [
    'Plaza los Olivos, Local #13',
    'bulevar del Este, Salida hacia La Lima',
    'San Pedro Sula',
  ],
  ['+504 9762-7444'],
  ['Lunes a Sábado:', '8:30am a 6:00pm']
);

const SanPedroSula2 = CreateContactInfo(
  [
    'Bo. Río de Piedras en la calle 7',
    'entre la 18 y 19 contiguo al Consulado de Mexico Local 3',
  ],
  ['+504 9840-5505'],
  ['Lunes a Sábado:', '8:30am a 6:00pm']
);

const Choluteca = CreateContactInfo(
  ['Metroplaza local #4B, Bulevar Chorotega', '4ta calle Nor Oeste, Choluteca'],
  ['+504 9895-6027'],
  ['Lunes a Sábado:', '8:30am a 6:00pm'],
  ['24 horas al día los 7 días de la semana']
);

const Comayagua = CreateContactInfo(
  ['Barrio Torondon, Centro Comercial Metróplaza, Local #5B, Comayagua'],
  ['+504 9689-9481'],
  ['Lunes a Sábado:', '8:30am a 6:00pm'],
  ['24 horas al día los 7 días de la semana']
);

const Olancho = CreateContactInfo(
  ['Mall premier, primer nivel local 101, Juticalpa, Olancho'],
  ['+504 9675 7047'],
  ['Lunes a Sábado:', '8:30am a 6:00pm']
);

const LaCeiba = CreateContactInfo(
  ['Plaza Toronjal, Local 109, La Ceiba Atlantida'],
  ['+504 9825-1142'],
  ['Lunes a Sábado:', '8:30am a 6:00pm']
);

const LasVegas = CreateContactInfo(
  ['3050 E Desert In Rd Suite 122, Las Vegas, Nevada 89121'],
  ['+1 725 300 4436'],
  ['Lunes a Sábado:', '10:00 am to 7:00 pm']
);

export const CONTACT_DATA = {
  Tegucigalpa,
  SanPedroSula,
  SanPedroSula2,
  Choluteca,
  Comayagua,
  Olancho,
  LaCeiba,
  LasVegas,
};
