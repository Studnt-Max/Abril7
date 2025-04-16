import { HouseController } from "../controller/houseController";

describe("HouseController", () => {

    let customeController: HouseController;
   
    beforeEach(() =>{
        const mockDBService={
            getHouse: jest.fn(), //jest.fn: 
            getHouseById: jest.fn()
        }
        let houseController: HouseController;

        
        houseController = new HouseController(mockDBService);
        
    })


    test('should return sum when both numbs are positive', async() =>{
        //given: parametros de entrada
        const num1=10;
        const num2=10;
        //when
        const result= houseController.sum(num1,num2);

        //then
        expect(result).toBe(20);            
    })


    test('should throw error when one of the num is negative', async() =>{
        //given: parametros de entrada
        const num1=10;
        const num2=-10;
        //when
        const result=houseController.sum(num1,num2);

        //then
        expect(()=>
        ).rejects.toThrow('numbers cannot be negative');            
    })

   
})