import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManySessions_session_tagsArgs } from "./args/FindManySessions_session_tagsArgs";
import { Sessions_session_tags } from "../../../models/Sessions_session_tags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Sessions_session_tags)
export class FindManySessions_session_tagsResolver {
  @TypeGraphQL.Query(_returns => [Sessions_session_tags], {
    nullable: false
  })
  async findManySessions_session_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySessions_session_tagsArgs): Promise<Sessions_session_tags[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sessions_session_tags.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
