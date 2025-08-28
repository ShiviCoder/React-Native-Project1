import { use, useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, Image, TextInput, ActivityIndicator } from 'react-native'
// import { Image } from 'reacnative/types_generated/index';

const FlatCards = () => {
    const [products, setProducts] = useState([]);
    const [beautyProducts, setBeautyProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery , setSearchQuery] = useState('');
    useEffect(() => {
        getData();
        getBeautyProducts();
    }, [])


    const getData = () => {
        setLoading(true);
        const api = 'https://fakestoreapi.in/api/products';
        fetch(api)
            .then((response) => response.json())
            .then(data =>{
                setProducts(data.products);
                setLoading(false);
    }).catch(()=>setLoading(false))
    }

    const getBeautyProducts = () => {
        setLoading(true);
        const beautyApi = 'https://dummyjson.com/products/category/beauty';
        fetch(beautyApi)
            .then((res) => res.json())
            .then((data) => {setBeautyProducts(data.products)
                setLoading(false)
            }).catch(()=>setLoading(false))
        
    }

    // const data = [
    //     {id : 1,name : 'Shivani'
    //     },
    //     {id : 2,name : 'Joy'}
    // ]

       if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={{ color: "white",fontSize : 20, marginTop: 10 }}>Loading products...</Text>
            </View>
        );
    }

    const filteredItem1 = products.filter((item)=>  item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const filteredItem2 = beautyProducts.filter((item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <ScrollView style={styles.container}>
            <TextInput placeholder='Search'
                placeholderTextColor="gray"
                clearButtonMode='always'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.searchBox}
                value={searchQuery}
                onChangeText={setSearchQuery} />
            <View>
                <Text style={styles.heading}>Electronic Items</Text>
            </View>
            <FlatList
                data={searchQuery ? filteredItem1 : products}
                horizontal={true}
                renderItem={({ item }) => {
                    return (<>
                        <View style={styles.viewImage}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.text}>Title : {item.title}</Text>
                            <Text style={styles.priceText}>Price  : {item.price} Rs.</Text>
                        </View>
                    </>
                    )
                }}
            />
            <View>
                <Text style={styles.heading}>Beauty Products</Text>
            </View>
            <FlatList
                data={searchQuery ? filteredItem2 : beautyProducts}
                horizontal={true}
                renderItem={({ item }) => {
                    return (<>
                        <View style={styles.viewImage}>
                            <Image source={{ uri: item.thumbnail }} style={styles.image} />
                            <Text style={styles.text}>Title : {item.title}</Text>
                            <Text style={styles.priceText}>Price  : {item.price} Rs.</Text>
                        </View>
                    </>
                    )
                }}
            />
            <View>
                <Text style={styles.heading}>Beauty Products</Text>
            </View>
            <FlatList
                data={beautyProducts}
                horizontal={true}
                renderItem={({ item }) => {
                    return (<>
                        <View style={styles.viewImage}>
                            <Image source={{ uri: item.thumbnail }} style={styles.image} />
                            <Text style={styles.text}>Title : {item.title}</Text>
                            <Text style={styles.priceText}>Price  : {item.price} Rs.</Text>
                        </View>
                    </>
                    )
                }}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    },
    heading: {
        fontSize: 40,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'center'
    },
    viewImage: {
        backgroundColor: 'white',
        padding: 10,
        width: 220,
        borderRadius: 10,
        marginRight: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',       // full width of the card
        height: 120,         // taller to fit image nicely
        resizeMode: 'contain', // prevents stretching
        marginBottom: 10,    // space between image and text
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
    },
    priceText: {
        fontSize: 14,
        color: 'green',
        marginTop: 5,
        textAlign: 'center',
    },
    searchBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        // color : 'black'
    }
})
export default FlatCards;