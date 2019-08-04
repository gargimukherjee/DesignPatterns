import { Employee } from './classes/employee';

export class Main {

    public init(){
        let CEO:Employee = new Employee("John","CEO", 30000);
        let headSales:Employee = new Employee("Robert","Head Sales", 20000);
        let headMarketing:Employee = new Employee("Michel","Head Marketing", 20000);

        let clerk1:Employee = new Employee("Laura","Marketing", 10000);
        let clerk2:Employee = new Employee("Bob","Marketing", 10000);

        let salesExecutive1:Employee = new Employee("Richard","Sales", 10000);
        let salesExecutive2:Employee = new Employee("Rob","Sales", 10000);

        CEO.add(headSales);
        CEO.add(headMarketing);

        headSales.add(salesExecutive1);
        headSales.add(salesExecutive2);

        headMarketing.add(clerk1);
        headMarketing.add(clerk2);

        CEO.showCEO();
        CEO.printHierarchy();

       // headSales.printHierarchy();
    }
}

let main = new Main();
main.init();