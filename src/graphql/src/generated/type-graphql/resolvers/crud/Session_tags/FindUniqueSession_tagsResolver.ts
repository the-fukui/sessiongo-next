import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSession_tagsArgs } from "./args/FindUniqueSession_tagsArgs";
import { Session_tags } from "../../../models/Session_tags";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session_tags)
export class FindUniqueSession_tagsResolver {
  @TypeGraphQL.Query(_returns => Session_tags, {
    nullable: true
  })
  async findUniqueSession_tags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSession_tagsArgs): Promise<Session_tags | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).session_tags.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
