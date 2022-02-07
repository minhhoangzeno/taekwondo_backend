import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CategoryVideoController } from './category-video/category-video.controller';
import { CategoryVideoService } from './category-video/category-video.service';
import { CategoryVideoModule } from './category-video/category-video.module';
import { VideoModule } from './video/video.module';
import { CommentModule } from './comment/comment.module';
import { ReplyModule } from './reply/reply.module';
import { ForumModule } from './forum/forum.module';
import { CategoryForumModule } from './category-forum/category-forum.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './role/roles.guard';

@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb://localhost/taekwondo'),
    AuthModule,
    BlogModule,
    CategoryVideoModule,
    VideoModule,
    CommentModule,
    ReplyModule,
    ForumModule,
    CategoryForumModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
})
export class AppModule { }
