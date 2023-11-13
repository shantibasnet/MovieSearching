interface Iimg{
height:number;
imageUrl: string;
width:number;
}

interface IMovie {
    id: string;
    i: Iimg;
    l:string; 
    q: string; 
    qid: string; 
    rank: number; 
    s: string; 
    y:number;
  }
  
export interface IMoviesState {
    data: IMovie[];
    isLoading: boolean;
    error: string | null;
  }
