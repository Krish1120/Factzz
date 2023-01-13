import React from "react";
import {
  Container,
  UserAvatar,
  UserAvatarContainer,
  PostCard,
  ImageAvatar,
  CommentSection,
  BackDrop,
  MessageInput,
  CommentsPositionWrapper,
  CommentsPositionContainer,
  Comment,
  Title3,
  Text4,
  Text2,
  Text5,
  Text6,
  MyCarousel,
  PostImage,
} from "../Styles/StyledUIComponents";
import Img1 from "../../assets/images/Img1.png";
import VerifyIcon from "../../assets/images/VerifyIcon.png";
import PostBuyIcon from "../../assets/images/PostBuyIcon.png";
import PostBookmark from "../../assets/images/PostBookmark.png";
import PostBookmarkActive from "../../assets/images/PostBookmarkActive.png";
import PostMenu from "../../assets/images/PostMenu.png";
import PostImg1 from "../../assets/images/PostImg1.png";
import PostImg2 from "../../assets/images/PostImg2.png";
import PostHeart from "../../assets/images/PostHeart.png";
import PostComment from "../../assets/images/PostComment.png";
import PostShare from "../../assets/images/PostShare.png";
import Repost from "../../assets/images/Repost.png";
import Emoji from "../../assets/images/Emoji.png";
import SendMessage from "../../assets/images/SendMessage.png";
import { InputAdornment, Modal } from "@mui/material";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PostOpenModal = ({
  commentModal,
  handleCommentModalClose,
  handleDonateModalOpen,
  mode,
}) => {
  return (
    <Modal
      open={commentModal}
      onClose={handleCommentModalClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Container direction="row" width="100%" height="100%">
        <BackDrop onClick={handleCommentModalClose} />
        <Container width="45%" m="0 10%">
          <PostCard style={{ boxShadow: "none" }}>
            <Container direction="row" justify="space-between" width="100%">
              <Container direction="row">
                <UserAvatarContainer>
                  <UserAvatar
                    width="40px!important"
                    height="40px!important"
                    src={Img1}
                  />
                </UserAvatarContainer>
                <Container m="0 5px" align="flex-start">
                  <Container direction="row">
                    <Title3>Natty Heavy</Title3>
                    <ImageAvatar src={VerifyIcon} width="18px" height="18px" />
                  </Container>
                  <Text4>@nattyheavy</Text4>
                </Container>
              </Container>
              <Container direction="row" width="15%" justify="space-between">
                <ImageAvatar
                  onClick={handleDonateModalOpen}
                  width="20px"
                  src={PostBuyIcon}
                />
                <ImageAvatar width="15px" height="20px" src={PostBookmark} />
                <ImageAvatar width="6px" height="20px" src={PostMenu} />
              </Container>
            </Container>
            <Text2 style={{ alignSelf: "flex-start" }}>
              See you tonight @ 11 pm
            </Text2>
            <MyCarousel
              showIndicators={false}
              showArrows={false}
              emulateTouch={true}
              showThumbs={false}
            >
              <PostImage src={PostImg1} />
              <PostImage src={PostImg2} />
            </MyCarousel>
            <Container direction="row" width="100%" justify="space-around">
              <Container direction="row">
                <ImageAvatar height="22px" src={PostHeart} />
                <Text5>12</Text5>
              </Container>
              <Container direction="row">
                <ImageAvatar src={PostComment} />
                <Text5>12</Text5>
              </Container>
              <Container direction="row">
                <ImageAvatar height="20px" src={Repost} />
                <Text5>12</Text5>
              </Container>
              <Container direction="row">
                <ImageAvatar src={PostShare} />
                <Text5>12</Text5>
              </Container>
            </Container>
          </PostCard>
        </Container>
        <Container width="25%">
          <CommentSection>
            <CommentsPositionWrapper style={{ top: 24 }}>
              <CommentsPositionContainer style={{ height: "3rem" }}>
                <Text2>Comments</Text2>
              </CommentsPositionContainer>
            </CommentsPositionWrapper>
            {num.map((item, index) => (
              <Comment
                key={index}
                style={{
                  paddingBottom: index === num.length - 1 ? "2.5rem" : "",
                  paddingTop: index === 0 ? "2rem" : "",
                }}
              >
                <Container direction="row" width="80%" justify="flex-start">
                  <UserAvatarContainer>
                    <UserAvatar
                      width="40px!important"
                      height="40px!important"
                      src={Img1}
                    />
                  </UserAvatarContainer>
                  <Container m="0 5px" align="flex-start">
                    <Container direction="row">
                      <Title3 size="0.8rem">Username</Title3>
                      <Text6>I loved it</Text6>
                    </Container>
                    <Container m="5px 0" direction="row">
                      <Text2 size="0.8rem">5 min ago</Text2>
                      <Text2 size="0.8rem">Reply</Text2>
                    </Container>
                  </Container>
                </Container>
                <ImageAvatar height="22px" src={PostHeart} />
              </Comment>
            ))}
            <CommentsPositionWrapper>
              <CommentsPositionContainer>
                <MessageInput
                  type="text"
                  placeholder="Type a message..."
                  themecolor={mode === "light" ? "#95AEC7" : "#707070"}
                  endAdornment={
                    <InputAdornment position="end">
                      <ImageAvatar src={Emoji} />
                    </InputAdornment>
                  }
                />
                <ImageAvatar
                  style={{ margin: "0 0 0 5px" }}
                  width="35px"
                  height="35px"
                  src={SendMessage}
                />
              </CommentsPositionContainer>
            </CommentsPositionWrapper>
          </CommentSection>
        </Container>
      </Container>
    </Modal>
  );
};

export default PostOpenModal;
