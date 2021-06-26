import BackgroundService from 'react-native-background-actions';
import BackgroundJob from 'react-native-background-actions';
const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));
class BService
{
    constructor()
    {
        this.Options = {
            taskName: 'Viridis',
            taskTitle: '',
            taskDesc: 'Viridis',
            taskIcon: {
                name: 'ic_launcher',
                type: 'mipmap',
            },
            color: '#38C0F3',
            parameters: {
                delay: 20000,
            },
            // actions: '["Exit"]'
        };

        const options = {
            taskName: 'Example',
            taskTitle: 'ExampleTask title',
            taskDesc: 'ExampleTask description',
            taskIcon: {
                name: 'ic_launcher',
                type: 'mipmap',
            },
            color: '#ff00ff',
            linkingURI: 'yourSchemeHere://chat/jane', // Add this
            parameters: {
                delay: 1000,
            },
        };
        
        
    }
async VeryIntensiveTask(taskDataArguments){
        const { delay } = taskDataArguments;
        await new Promise(async (resolve) => {
            var i = 0;
            for (let i = 0; BackgroundJob.isRunning(); i++) {  message: "Success DOOD "+i
                // })
               await sleep(delay);    
              }                     
        });
    }
    Start(value) {
        BackgroundService.start(this.VeryIntensiveTask, {
            ...this.Options,
            taskTitle: ` `,
            taskDesc: `Current value is: ${value}`
        });
    }
    Stop() {
        BackgroundService.stop();
    }
}

const BackgroudService = new BService();
export default BackgroudService;