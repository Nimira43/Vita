import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 1,
      title: "coats",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 1,
      title: "trainers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 1,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 1,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <Directory categories={categories} />
  );
}

export default App;
