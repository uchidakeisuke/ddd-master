// ormディレクトリ内でORM単位でディレクトリを作り、その中にそのORMに依存するrepositoryを実装する。
// そのためORMを変更する場合には、ここでimport元のORMディレクトリを切り替えることで変更を行う。
// これによって、ここでexportしているもの(実際は兄弟ファイルのindex.tsでexportしている)をimportしている箇所に変更が発生しない。
import { UserRepository } from '../prisma/repository/user.repository';
export { UserRepository };
