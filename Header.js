const Header = ({ onCategorySelect, categories }) => {
    return (
      <Carousel
        data={categories}
        renderItem={({ item }) => (
          <Image
            source={item.icon}
            onPress={() => onCategorySelect(item.Worker_Role)}
            style={{ width: 50, height: 50 }}
          />
        )}
      />
    );
  };
  const styles = StyleSheet.create({
    searchInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
    },
    profileImage: {
      width: 100,
      height: 100,
    },
  });
  