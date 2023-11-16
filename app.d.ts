interface Category {
  title: string;
  image: ImageProps;
}

interface NFT {
  title: string;
  image: ImageProps;
  likes?: number;
  price?: number;
  chain?: string;
  rate?: number;
  category?: string;
}

interface StatsType {
  Ranking: {
    icon: React.JSX.Element;
    nftList: NFT[];
  };
  Activity: {
    icon: React.JSX.Element;
    list: any;
  };
}

interface CategoryObj {
  title: string;
  icon?: React.JSX.Element;
}
