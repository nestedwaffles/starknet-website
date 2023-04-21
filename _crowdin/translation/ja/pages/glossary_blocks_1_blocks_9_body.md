このL1コントラクトは、L2状態へのコミットメントを保存することによって、システムの状態を定義します。 契約は Starknet OS プログラムのハッシュも格納します – ネットワークが実行されている Starknet のバージョンを効果的に定義します。 L1コア契約上のコミットされた状態は、Starknetのコンセンサスメカニズム、すなわちシステムはL1 Ethereumのコンセンサスによって保護されています。 状態を維持することに加えて、Starknet L1コアコントラクトは、L1上のStarknetの主要な操作のハブです。 特に：

* 状態の更新トランザクションを検証できる許可された検証子(コントラクト)のリストを格納します
* L1↔️ L2の相互作用