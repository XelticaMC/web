# チェスト保護

拠点のチェストや樽といった収納を荒らされないよう、保護することができます。

## プライベート保護

プライベート保護では、自分および許可したユーザー以外の使用、破壊ができなくなります。その名の通り、自室のチェストなどに使うことをおすすめします。

通常、作成したチェストは全て**プライベート保護**がかかっているため、解除する場合は下記の`/cremove`コマンドを使用する必要があります。

## パブリック保護

パブリック保護では、自分以外による破壊ができなくなりますが、使用はできます。共有倉庫などにお使いください。

## パスワード保護

パスワード保護では、設定したパスワードを知っている人に限り開閉できるチェストを作成できます。

## コマンド

|コマンド名|説明|
|-|-|
|/cprivate|実行後に対象のブロックを左クリック（あるいはタップ）することでプライベート保護を設定します|
|/cpublic|実行後に対象のブロックを左クリック（あるいはタップ）することでパブリック保護を設定します|
|/cmodify 名前...|実行後に対象のブロックを左クリック（あるいはタップ）すると、プライベート保護したチェストにアクセスできるプレイヤーを追加できます。名前は複数指定でき、名前の先頭に `-` を指定すると削除、 `@` を指定するとその人を管理者にできます|
|/cremove|実行後に対象のブロックを左クリック（あるいはタップ）することで保護を解除します|
|/cinfo|実行後に対象のブロックを左クリック（あるいはタップ）することで保護内容を確認できます|
