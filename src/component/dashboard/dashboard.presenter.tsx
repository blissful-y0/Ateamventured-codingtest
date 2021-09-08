import Swtich from "../../commons/swtiches";
import MethodSelect from "../../commons/methodSelect";
import MaterialSelect from "../../commons/materialSelect";
import {
  CompanyIcon,
  Diverder,
  Heading,
  Logo,
  UserInfoContainer,
  DashBoardWrapper,
  DashBoard,
  RequestTitle,
  RequestContainer,
  RequestText,
  SelectBox,
  SelectContainer,
  SelectBoxConatiner,
  SwitchTest,
  SwitchContainer,
  OrderCard,
  OrderCardsContainer,
  OrderCardTopLayout,
  OrderTitle,
  OrderClient,
  OrderDueDate,
  OrderCardBottomLayout,
  DetailContainer,
  DetailBoldText,
  OrderDetail,
  ViewRequestButton,
  ChatRequestButton,
  OnlineOrder,
} from "./dashboard.style";
import {
  IData,
  IMaterialSeleted,
  IMethodSelected,
  IState,
} from "./dashboard.types";
import { SetStateAction } from "react";

export interface IProps {
  data: IData[] | [];
  materialSelected: IMaterialSeleted[] | [];
  setMaterialSelected: (_: SetStateAction<IMaterialSeleted[]>) => void;
  methodSelected: IMethodSelected[] | [];
  setMethodSelected: (_: SetStateAction<IMethodSelected[]>) => void;
  state: IState;
  setState: (_: SetStateAction<IState>) => void;
  filteredData: IData[] | [];
}

const DashBoardUI = ({
  data,
  materialSelected,
  setMaterialSelected,
  methodSelected,
  setMethodSelected,
  state,
  setState,
  filteredData,
}: IProps) => {
  return (
    <>
      <Heading>
        <Logo src="/logo.png" />
        <UserInfoContainer>
          <CompanyIcon src="/icon.png" /> A 가공 업체
          <Diverder />
          로그아웃
        </UserInfoContainer>
      </Heading>
      <DashBoardWrapper>
        <DashBoard>
          <RequestContainer>
            <RequestTitle>들어온 요청</RequestTitle>
            <RequestText>파트너님에게 딱 맞는 요청서를 찾아보세요.</RequestText>
            <SelectContainer>
              <SelectBoxConatiner>
                <MethodSelect
                  methodSelected={methodSelected}
                  setMethodSelected={setMethodSelected}
                />
                <MaterialSelect
                  materialSelected={materialSelected}
                  setMaterialSelected={setMaterialSelected}
                />
              </SelectBoxConatiner>
              <SwitchContainer>
                <Swtich state={state} setState={setState} />
                <SwitchTest>상담 중인 요청만 보기</SwitchTest>
              </SwitchContainer>
            </SelectContainer>
          </RequestContainer>
          <OrderCardsContainer>
            {filteredData !== []
              ? filteredData.map((el, index) => (
                  <OrderCard key={el.id}>
                    <OrderCardTopLayout>
                      <OrderTitle>
                        {el?.title}
                        {el?.status === "상담중" ? (
                          <OnlineOrder>상담중</OnlineOrder>
                        ) : (
                          <></>
                        )}
                      </OrderTitle>
                      <OrderClient>{el?.client}</OrderClient>
                      <OrderDueDate>{el?.due}까지 납기</OrderDueDate>
                    </OrderCardTopLayout>
                    <OrderCardBottomLayout>
                      <DetailContainer>
                        <OrderDetail>도면개수</OrderDetail>
                        <DetailBoldText>{el?.count}</DetailBoldText>
                      </DetailContainer>
                      <DetailContainer>
                        <OrderDetail>총 수량</OrderDetail>
                        <DetailBoldText>{el?.amount}개</DetailBoldText>
                      </DetailContainer>
                      <DetailContainer>
                        <OrderDetail>가공방식</OrderDetail>
                        <DetailBoldText>
                          {el?.method.map((data) => `${data} `)}
                        </DetailBoldText>
                      </DetailContainer>
                      <DetailContainer>
                        <OrderDetail>재료</OrderDetail>
                        <DetailBoldText>
                          {el?.material.map((data) => `${data} `)}
                        </DetailBoldText>
                      </DetailContainer>
                      <DetailContainer>
                        <ViewRequestButton>요청 내역 보기</ViewRequestButton>
                        <ChatRequestButton>채팅하기</ChatRequestButton>
                      </DetailContainer>
                    </OrderCardBottomLayout>
                  </OrderCard>
                ))
              : data.map((el, index) => (
                  <OrderCard key={el.id}>
                    <OrderCardTopLayout>
                      <OrderTitle>
                        {el?.title}
                        {el?.status === "상담중" ? (
                          <OnlineOrder>상담중</OnlineOrder>
                        ) : (
                          <></>
                        )}
                      </OrderTitle>
                      <OrderClient>{el?.client}</OrderClient>
                      <OrderDueDate>{el?.due}까지 납기</OrderDueDate>
                    </OrderCardTopLayout>
                    <OrderCardBottomLayout>
                      <DetailContainer>
                        <OrderDetail>도면개수</OrderDetail>
                        <DetailBoldText>{el?.count}</DetailBoldText>
                      </DetailContainer>
                      <DetailContainer>
                        <OrderDetail>총 수량</OrderDetail>
                        <DetailBoldText>{el?.amount}개</DetailBoldText>
                      </DetailContainer>
                      <DetailContainer>
                        <OrderDetail>가공방식</OrderDetail>
                        <DetailBoldText>
                          {el?.method.map((data) => `${data} `)}
                        </DetailBoldText>
                      </DetailContainer>
                      <DetailContainer>
                        <OrderDetail>재료</OrderDetail>
                        <DetailBoldText>
                          {el?.material.map((data) => `${data} `)}
                        </DetailBoldText>
                      </DetailContainer>
                      <DetailContainer>
                        <ViewRequestButton>요청 내역 보기</ViewRequestButton>
                        <ChatRequestButton>채팅하기</ChatRequestButton>
                      </DetailContainer>
                    </OrderCardBottomLayout>
                  </OrderCard>
                ))}
          </OrderCardsContainer>
        </DashBoard>
      </DashBoardWrapper>
    </>
  );
};

export default DashBoardUI;
