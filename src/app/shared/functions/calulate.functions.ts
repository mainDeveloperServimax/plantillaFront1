export const calculateText = (chain: string): string => {
    try {
        let Splittedchain = chain.split('');
        let num: string = '';
        let numbers: number[] = [], operators: string[] = [];
        let a: number = 0;

        for (let i = 0; i < Splittedchain.length; i++) {

            if (Splittedchain[i] != '+' && Splittedchain[i] != '-' && Splittedchain[i] != '*' && Splittedchain[i] != '/') {
                num = num + Splittedchain[i];
            } else {
                numbers[a] = Number(num);
                operators[a] = Splittedchain[i];
                a++;
                num = '';
            }
        }

        numbers[a] = Number(num);

        ['/', '*', '-', '+'].forEach((sign) => {
            let index: number = 0;
            if (operators.includes(sign)) {
                while (index < operators.length) {
                    const value = operators[index];
                    if (value == sign) {
                        switch (sign) {
                            case '*':
                                numbers.splice(index, 2, numbers[index] * numbers[index + 1]);
                                break;
                            case '/':
                                numbers.splice(index, 2, numbers[index] / numbers[index + 1]);
                                break;
                            case '-':
                                numbers.splice(index, 2, numbers[index] - numbers[index + 1]);
                                break;
                            case '+':
                                numbers.splice(index, 2, numbers[index] + numbers[index + 1]);
                                break;
                        }
                        operators.splice(index, 1);
                        index = 0;

                    } else {
                        index++;
                    }
                }

            }
        });

        return numbers[0].toFixed(2).toString();
    } catch (error) {
        return 'Error'
    }

}