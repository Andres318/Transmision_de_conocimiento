import { Injectable } from '@angular/core'

export interface DataItem {
  id: number
  name: string
  description: string
  photo: string
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items = new Array<DataItem>(
    {
      id: 1,
      name: 'Item 1',
      description: 'The',
      photo:"https://material.angular.io/assets/img/examples/shiba2.jpg",
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.       A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally      bred for hunting.',
      photo:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description for Item 3',
      photo:"https://images.squarespace-cdn.com/content/v1/58533b8eebbd1abde9c34374/1490038461823-85N8SSAN9J35NAE5EHJ1/top_wave_02.jpg",
    },
    {
      id: 4,
      name: 'Item 4',
      description: 'Description for Item 4',
      photo:"https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
    },
    {
      id: 5,
      name: 'Item 5',
      description: 'Description for Item 5',
      photo:"https://cdn.pixabay.com/photo/2016/07/07/15/35/puppy-1502565_1280.jpg",
    },
    {
      id: 6,
      name: 'Item 6',
      description: 'Description for Item 6',
      photo:"https://us.123rf.com/450wm/chalabala/chalabala1307/chalabala130700044/20862617-mast%C3%ADn-est%C3%A1-durmiendo-en-el-prado.jpg",
    }
  )

  getItems(): Array<DataItem> {
    return this.items
  }

  getItem(id: number): DataItem {
    return this.items.filter((item) => item.id === id)[0]
  }
}
