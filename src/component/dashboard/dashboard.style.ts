import styled from "@emotion/styled";

export const Heading = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1565c0;
  color: #1565c0;
  display: flex;
  align-items: center;
  padding-left: 2%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 153px;
  height: 20px;
`;

export const CompanyIcon = styled.img`
  width: 16.67px;
  height: 15px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  width: 20%;
  color: white;
  align-items: center;
  justify-content: space-around;
  padding-right: 3%;
  max-width: 208.67px;
  min-width: 200px;
`;

export const Diverder = styled.div`
  width: 1px;
  height: 16px;
  border: 1px solid white;
  background-color: white;
`;

export const DashBoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const DashBoard = styled.div`
  width: 80%;
  max-width: 1500px;
  display: flex;
  height: 100%;
  padding: 2%;
  margin-top: 5px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  height: 30%;
  width: 100%;
  max-height: 200px;
  margin-bottom: 2%;
`;

export const OrderCardsContainer = styled.div`
  display: grid;
  justify-content: center;
  width: 90%;
  max-width: 1382px;
  min-width: 1178px;
  padding: 1%;
  grid-template-columns: 400px 400px 400px;
`;

export const RequestTitle = styled.text`
  color: #323d45;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0.5%;
`;

export const RequestText = styled.text`
  color: #323d45;
  font-weight: normal;
`;

export const SelectBox = styled.div`
  width: 100px;
  height: 30px;
  border: 1px solid black;
  background-color: pink;
  margin-right: 3%;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 5%;
`;

export const SelectBoxConatiner = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 220px;
  max-width: 220px;
`;

export const SwitchTest = styled.text`
  color: #323d45;
  font-weight: 500;
  font-size: 14px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 220px;
  max-width: 220px;
  align-items: center;
  justify-content: center;
`;

export const OrderCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 366px;
  height: 356px;
  max-width: 366px;
  max-height: 356px;
  min-width: 366px;
  min-height: 356px;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 3%;
  :hover {
    border: 2px solid #2196f3;
  }
`;

export const OrderCardTopLayout = styled.div`
  width: 90%;
  height: 30%;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

export const OrderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #323d45;
  font-weight: bold;
  font-size: 16px;
`;

export const OrderClient = styled.text`
  color: #323d45;
  font-weight: 500;
  font-size: 14px;
  margin-top: 1%;
`;

export const OrderDueDate = styled.text`
  color: #939fa5;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin-top: 9%;
`;

export const OrderCardBottomLayout = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailBoldText = styled.text`
  color: #323d45;
  font-weight: bold;
  font-size: 14px;
  margin-left: 10%;
`;

export const OrderDetail = styled.div`
  width: 70px;
  max-width: 70px;
  min-width: 70px;
  color: #323d45;
  font-weight: normal;
  font-size: 14px;
`;

export const ViewRequestButton = styled.button`
  background-color: #2196f3;
  color: white;
  text-align: center;
  outline: none;
  cursor: pointer;
  border: 0px;
  border-radius: 4px;
  width: 108px;
  height: 32px;
  margin-right: 3%;
`;

export const ChatRequestButton = styled.button`
  background-color: white;
  color: #2196f3;
  text-align: center;
  outline: none;
  cursor: pointer;
  border: 1px solid #2196f3;
  border-radius: 4px;
  width: 108px;
  height: 32px;
`;

export const OnlineOrder = styled.button`
  height: 24px;
  width: 50px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  text-align: center;
  outline: none;
  color: #ffa000;
  background-color: white;
  font-weight: 500;
  font-size: 12px;
`;
