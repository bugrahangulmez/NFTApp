import {StyleSheet, View} from 'react-native';
import {COLORS} from '../constants/constants';
import {DropDown, NFTListVertical, StatsHeader, TopTab} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {scaleHeight, scaleWidth} from '../constants/scale';

const Stats = () => {
  const stats: StatsType = {
    Ranking: {
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
      nftList: [
        {
          title: 'Azumi',
          image: require('../assets/images/ranking/azumi.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: 20.12,
        },
        {
          title: 'Ape Club',
          image: require('../assets/images/ranking/ape_club.png'),
          chain: 'Etherium',
          price: 88055.02,
          rate: -3.12,
        },
        {
          title: 'Bat',
          image: require('../assets/images/ranking/bat.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: 20.12,
        },
        {
          title: 'Bird',
          image: require('../assets/images/ranking/bird.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: -3.12,
        },
        {
          title: 'Cryoto',
          image: require('../assets/images/ranking/cryoto.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: -3.12,
        },
        {
          title: 'Hape Prime',
          image: require('../assets/images/ranking/hape_prime.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: 20.12,
        },
        {
          title: 'Metaverse',
          image: require('../assets/images/ranking/metaverse.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: -3.12,
        },
        {
          title: 'Mountain',
          image: require('../assets/images/ranking/mountain.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: 20.12,
        },
        {
          title: 'Mutant Ape',
          image: require('../assets/images/ranking/mutant_ape.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: 20.12,
        },
        {
          title: 'Mutant',
          image: require('../assets/images/ranking/mutant.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: 20.12,
        },
        {
          title: 'Sandbox',
          image: require('../assets/images/ranking/sandbox.png'),
          chain: 'Etherium',
          price: 200055.02,
          rate: 20.12,
        },
      ],
    },
    Activity: {
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
      list: [],
    },
  };
  const chains: CategoryObj[] = [
    {
      title: 'All Chains',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'Etherium',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'BNB',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'Avalanche',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'Solana',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'Polkadot',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
  ];
  const data: CategoryObj[] = [
    {
      title: 'All Categories',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'Art',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'Science',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'Web 3',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
    {
      title: 'Gaming',
      icon: <FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dot1} />

      <StatsHeader title="Stats" />
      <TopTab {...stats} />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <DropDown
          categoryList={data}
          marginLeft={16}
          marginTop={30}
          icon={<FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />}
        />
        <DropDown
          categoryList={chains}
          position="absolute"
          icon={<FontAwesomeIcon icon={faHeart} style={{color: 'white'}} />}
          top={30}
          right={15}
        />
      </View>
      <NFTListVertical nftList={stats.Ranking.nftList} />
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  dot1: {
    width: scaleWidth(215),
    height: scaleWidth(215),
    borderRadius: 300,
    backgroundColor: '#0C445B',
    position: 'absolute',
    top: scaleHeight(344),
    left: scaleWidth(-300),
    shadowColor: '#0C445B',
    shadowOffset: {
      width: 400,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 60,
    zIndex: -30,
  },
});
