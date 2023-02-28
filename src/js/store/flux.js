const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            people: [],
			planet: [],
			prendido: false
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            getPeople: () => {

                fetch("https://www.swapi.tech/api/people/")
                    .then(info_persona => info_persona.json())
                    .then(data => {
                        setStore({
                            people: data.results
                        })
                        console.log(data.results)

                    })

            },

			getPlanet: () => {

                fetch("https://www.swapi.tech/api/planets/")
                    .then(info_planeta => info_planeta.json())
                    .then(data => {
                        setStore({
                            planet: data.results
                        })
                        console.log(data.results)

                    })

            },

			
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;