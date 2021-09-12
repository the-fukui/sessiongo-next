import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteSession_tagsArgs } from "./args/DeleteSession_tagsArgs";
import { Session_tags } from "../../../models/Session_tags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session_tags)
export class DeleteSession_tagsResolver {
  @TypeGraphQL.Mutation(_returns => Session_tags, {
    nullable: true
  })
  async deleteSession_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSession_tagsArgs): Promise<Session_tags | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).session_tags.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
