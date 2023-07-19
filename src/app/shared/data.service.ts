import { Injectable } from '@angular/core'

export interface DataItem {
  id: number
  name: string
  description: string
  photo: string
  reactions:string
  comments:string
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items = new Array<DataItem>(
    {
      id: 1,
      name: 'Miguel Quintero',
      description: 'De paso por el Rio Chicamocha!',
      photo:"https://pbs.twimg.com/media/BMVu3g4CUAAFInE?format=jpg",
      reactions:"412",
      comments:"334",

    },
    {
      id: 2,
      name: 'Rubi Utima',
      description: 'Por fin pudimos conocer Caño Cristales, sin duda una experiencia inigualable.',
      photo:"https://blogs.elespectador.com/wp-content/uploads/2015/11/DSC_0054-copy.jpg",
      reactions:"566",
      comments:"239",
    },
    {
      id: 3,
      name: 'David Vasquez',
      description: 'Estan todos invitados a participar en el siguiente encuentro de Artesanias Colombia, el evento se llevara a cabo el dia sabado 22 de Julio, nos vemos alla. ',
      photo:"https://artesaniasdecolombia.com.co/Documentos/Contenido/6317_artesanias-colombia-rendicion-cuentas-2012.jpg",
      reactions:"715",
      comments:"454",
    },
    {
      id: 4,
      name: 'Angie Sanabria ',
      description: 'Es interesante conocer el proceso de un producto tan colombiano como el cafe, sin duda alguna es algo de lo que orgullecernos, agradezco a la señora Aura por su invitacion y atencion.',
      photo:"https://www.bonka.es/themes/custom/bonka/img/recolectora-de-cafe.jpg",
      reactions:"984",
      comments:"789",
    },
    {
      id: 5,
      name: 'Arturo Andrade',
      description: 'Es importante preservar nuestra cultura del caribe, por ello los invito a leer mi ultima columna Culturas Colombianas: Caribe (https://www.lifeder.com/cultura-de-colombia/)',
      photo:"https://www.lifeder.com/wp-content/uploads/2020/01/colombia-mujer-Cartagena-1024x683.jpg",
      reactions:"468",
      comments:"285",
    },
    {
      id: 6,
      name: 'Natalia Ruiz',
      description: 'Primera vez en Palmira, como es posible que no conociera esta delica antes, gracias Palmira por este nuevo postre',
      photo:"https://elrinconcolombiano.com/wp-content/uploads/2023/04/Manjar-blanco-receta-colombiana.jpg",
      reactions:"945",
      comments:"458",
    },
    {
      id: 7,
      name: 'Mario Mendoza',
      description: '"Los silleteros de Santa Elena es uno de los atractivos más importantes de la Feria de las Flores de Medellín." Orgulloso de mi Medellin!',
      photo:"https://cdn.colombia.com/sdi/2019/08/01/silleteros-santa-elena-feria-de-las-flores-medellin-757866.jpg",
      reactions:"881",
      comments:"512",
    },
    {
      id: 8,
      name: 'Karen Perez',
      description: 'Abren convocatoria para capacitar a más de 7 mil artesanos de Colombia',
      photo:"https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/artesanos.jpg",
      reactions:"441",
      comments:"231",
    },
    {
      id: 9,
      name: 'Ministerio de Cultura',
      description: 'FRAGMENTOS abre convocatoria para proyectos curatoriales presentados por curadores con la participación de artistas colombianos.',
      photo:"https://www.mincultura.gov.co/prensa/noticias/PublishingImages/Comunicaciones/NOTICIAS_2022/CONVOCATORIA_720x970%20-2.jpg",
      reactions:"1231",
      comments:"802",
    },
    {
      id: 10,
      name: 'Camilo Sanchez',
      description: 'Hola a todos!, los quiero invitar a todos a ver nuestra nueva obra "Labio de liebre". El 22 y 23 de julio, estará en la #SalaTeatroColón del Centro Nacional de las Artes Delia Zapata Olivella.',
      photo:"https://www.mincultura.gov.co/eventos/PublishingImages/pieza%201%20labio%20de%20liebre%20600x600%20-2.jpg",
      reactions:"712",
      comments:"312",
    },
    {
      id: 11,
      name: 'Camila Gualdron',
      description: 'San Gil, la capital de la adrenalina!',
      photo:"https://xplorercolombia.com/wp-content/uploads/2021/05/torrentism-en-san-gil-3.jpg",
      reactions:"612",
      comments:"314",
    },
    {
      id: 12,
      name: 'Andres Rojas',
      description: 'Vamonos de viaje cultural al Santuario de Flora y Fauna los Flamencos.  ¡Reserva ahora tu excursión ancestral y ven a explorar este maravilloso lugar!',
      photo:"https://wiwatour.com/wp-content/uploads/2023/02/tour-a-camrones-guajira.webp",
      reactions:"512",
      comments:"215",
    }
  )

  getItems(): Array<DataItem> {
    return this.items
  }

  getItem(id: number): DataItem {
    return this.items.filter((item) => item.id === id)[0]
  }
}
