# Papyrus: Un nœud complet StarkNet Open-Source
## Papyrus sera un élément clé de l'infrastructure décentralisée de StarkNet
**TL;DR**
* Papyrus est une implémentation Rust d'un nœud complet StarkNet * Il fournira les bases du nouveau Séquencer StarkNet, qui améliorera considérablement le débit de StarkNet * Papyrus contribuera à faire progresser la performance et la décentralisation. Maintenant que StarkNet a atteint une excellente facilité d'utilisation, ce sont ses principales priorités de développement
## Introduction
Aujourd'hui, nous introduisons Papyrus, une implémentation Rust d'un nœud complet StarkNet qui permettra de préparer la voie à une utilisation massive de StarkNet. Le[nœud complet Papyrus](https://github.com/starkware-libs/papyrus)suivra l'état de StarkNet au fur et à mesure qu'il évolue au fil du temps et permettra aux utilisateurs et aux développeurs de interroger cet état via[le JSON-RPC de StarkNet](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json). Papyrus fournira les bases du nouveau Séquencer StarkNet, qui améliorera considérablement le débit de StarkNet dans quelques mois. Papyrus rejoint les autres nœuds complets de StarkNet — Pathfinder et Juno — qui sont chargés de synchroniser et de maintenir l'état StarkNet. Conformément à notre évolution en cours vers l'open-source de la pile StarkNet, Papyrus est open source sous la licence Apache 2.0.
## Papyrus — Fondations pour un séquenceur optimisé
Nous avons dit tôt que[les phases de développement de StarkNet](https://medium.com/starkware/starknet-on-to-the-next-challenge-96a39de7717)sont: (i) Fonctionnalité et utilisabilité en premier, suivi de (ii) l'échelle et la performance et, finalement, (iii) la décentralisation. StarkNet a atteint une excellente facilité d'utilisation, et maintenant la performance du système est la principale priorité, avec la décentralisation de prendre de la vapeur. Améliorer les performances du système est résolu en améliorant les performances du Sequencer, qui est responsable de la production de blocs StarkNet. Le séquenceur est la « machine » qui ordonne et exécute les transactions après avoir été soumises. Papyrus fournira au Sequencer StarkNet une couche de stockage efficace qui aidera à améliorer le débit. Tout d'abord, cela signifie que le séquenceur maintiendra une base de données locale plutôt qu'une base de données basée sur le cloud. De plus, Papyrus stockera un stockage plat, ce qui signifie qu’il interagira directement avec l’état, au lieu de l’atteindre par les chemins de Merkle-Patricia.
## Renforcement et décentralisation de la pile StarkNet
Il y a actuellement deux équipes qui développent un nœud complet StarkNet. Il y a[Pathfinder](https://github.com/eqlabs/pathfinder)par Equilibrium, implémenté en Rust, et[Juno](https://github.com/NethermindEth/juno)par Nethermind, qui travaillent à la première version officielle de leur implémentation Golang. Papyrus rejoint aujourd'hui ce mélange sain et favorise la décentralisation et la redondance. Ajouter un autre noeud complet et le faire open source aide à fournir la variété d'implémentations du client, qui est un indicateur important de la force d'un réseau décentralisé et de son statut de bien public.
## Versions en cours et plans futurs
La version actuelle vous permet de synchroniser avec l'état de StarkNet et d'accéder à toute l'histoire de StarkNet. Actuellement, la spécification JSON-RPC n'est que partiellement prise en charge, vous pouvez suivre la progression[ici](https://github.com/starkware-libs/papyrus#endpoints). Papyrus est maintenant open source, en attendant une publication complète pour un usage public dans quelques mois. En plus de travailler sur la compatibilité complète avec la[spécification JSON-RPC](https://github.com/starkware-libs/starknet-specs/blob/master/api/starknet_api_openrpc.json), l'équipe Papyrus aux côtés de Pathfinder et Juno, travailleront pour former la fondation de la[couche P2P StarkNet](https://github.com/starknet-io/starknet-p2p-specs). Avoir différents nœuds capables de communiquer et de synchroniser à travers la couche P2P est un grand bond vers un StarkNet décentralisé. De plus, la possibilité de synchroniser à partir de pairs (par opposition à la situation actuelle où chaque noeud communique avec une API centralisée) devrait améliorer considérablement le temps de synchronisation. En résumé, Papyrus est le troisième nœud complet à rejoindre l’écosystème StarkNet. Il est publié sous une licence open source (Apache 2.0) et constituera un élément crucial de l'infrastructure du StarkNet décentralisé.