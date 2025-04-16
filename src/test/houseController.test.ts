import { HouseController } from "../controller/houseController";
import { IDBService } from "../db/types/dbService";

describe("HouseController", () => {
    let houseController: HouseController;
    let mockDBService: jest.Mocked<IDBService>; // Tipo con Jest mocks

    beforeEach(() => {
        // Mock mínimo que cumple con IDBService
        mockDBService = {
            getHouses: jest.fn().mockResolvedValue([]),
            getHouseById: jest.fn().mockResolvedValue({ id: 1 } as any),
            getPrecio: jest.fn().mockResolvedValue(0),
            getUbicacion: jest.fn().mockResolvedValue(""),
            getDescripcion: jest.fn().mockResolvedValue(""),
            getCalificacion: jest.fn().mockResolvedValue(0),
            getTamConst: jest.fn().mockResolvedValue(0),
            getTamTerr: jest.fn().mockResolvedValue(0),
            getDuracion: jest.fn().mockResolvedValue(0),
            getTipo: jest.fn().mockResolvedValue("")
        };

        houseController = new HouseController(mockDBService);
    });


    test('should return sum when both numbs are positive', async() =>{
        //given: parametros de entrada
        const num1=10;
        const num2=10;
        //when
        const result= houseController.sum(num1,num2);

        //then
        expect(result).toBe(20);            
    })


    test('should throw error when one of the num is negative', () => { // Removido async
        // Given
        const num1 = 10;
        const num2 = -10;
    
        // Then (el when está implícito en el expect)
        expect(() => {
            // When: Ejecutamos la función síncrona dentro del expect
            houseController.sum(num1, num2);
        }).toThrow('numbers can be negative'); // Mensaje exacto del error
    });

   
})