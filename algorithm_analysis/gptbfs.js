// Grafik yapısı için düğüm sınıfı
class Node {
    constructor(value) {
        this.value = value;
        this.adjacentNodes = [];
        this.visited = false;
    }

    addAdjacent(node) {
        this.adjacentNodes.push(node);
        node.adjacentNodes.push(this);
    }
}

// Genişlik öncelikli arama fonksiyonu
function breadthFirstSearch(startNode) {
    const queue = []; // Kuyruk yapısı
    startNode.visited = true;
    queue.push(startNode);

    while (queue.length !== 0) {
        const currentNode = queue.shift(); // Kuyruktan bir düğüm çıkar
        console.log(currentNode.value); // Düğüm değerini yazdır veya istediğiniz işlemi yapın

        for (const adjacentNode of currentNode.adjacentNodes) {
            if (!adjacentNode.visited) {
                adjacentNode.visited = true;
                queue.push(adjacentNode);
            }
        }
    }
}

// Örnek grafik oluşturma
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.addAdjacent(node2);
node1.addAdjacent(node3);
node2.addAdjacent(node4);
node3.addAdjacent(node4);
node4.addAdjacent(node5);

// Genişlik öncelikli arama başlangıç düğümü olarak node1'i kullanma
console.log("Genişlik öncelikli arama:");
breadthFirstSearch(node1);
