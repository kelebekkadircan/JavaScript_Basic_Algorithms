//  Depth-First-Search derin arama

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

routes = [
    ["PHX", "LAX"],
    ["PHX", "JFK"],
    ["JFK", "LOS"],
    ["JFK", "OKC"],
    ["JFK", "HEL"],
    ["MEX", "BKK"],
    ["MEX", "LAX"],
    ["MEX", "LIM"],
    ["MEX", "EZE"],
    ["LIM", "BKK"],
]




const adjacenyList = new Map();


function addNode(airport) {
    adjacenyList.set(airport, [])
}


function addEdge(origin, destination) {
    adjacenyList.get(origin).push(destination)
    adjacenyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

// console.log(adjacenyList);

// Breadh-First-Search sığ arama
function bfs(start) {

    const visited = new Set()

    const queue = [start]

    while (queue.length > 0) {
        const airport = queue.shift()
        const destinations = adjacenyList.get(airport)

        for (const destination of destinations) {


            if (destination == "BKK") {
                console.log("found it");
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination);
            }

        }

    }
}

bfs("PHX");














