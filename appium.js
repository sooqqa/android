const { remote } = require('webdriverio');
const { execSync } = require('child_process');

async function runCalculatorTest() {
  const driver = await remote({
    path: '/',
    port: 5900,
    capabilities: {
      platformName: 'Android',
      'appium:deviceName': 'Nexus 6',
      'appium:appPackage': 'com.whatsapp',
      'appium:appActivity': 'com.whatsapp.Main',
      "appium:automationName": 'UiAutomator2',
      'appium:noReset': true,
      'appium:fullReset': false,
    }
  });

//   console.log('YYYYYYEEEEEEEEEESSSSSS, BLEATSSS');


    //Step 1:
    // const buttonElement = (await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/next_button")')).click();

    // await new Promise((resolve) => setTimeout(resolve, 15000));
    // executeADBCommand(`exec-out screencap -p > screenshotStep1.png`);

    //Step2:
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/eula_accept")').click();
    // await new Promise((resolve) => setTimeout(resolve, 15000));
    // executeADBCommand(`exec-out screencap -p > screenshotStep2.png`);

    //Step3:
    // await driver.$('android=new UiSelector().text("United States")').click();
    // await (await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/menuitem_search")')).click();
    // await driver.$('android= new UiSelector().resourceId("com.whatsapp:id/search_src_text")').setValue('Ukraine');
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // const country = await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/country_first_name")');
    // await country.click();
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/registration_phone")').setValue("688400671");
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/registration_submit")').click();
    // await new Promise((resolve) => setTimeout(resolve, 15000));
    // executeADBCommand(`exec-out screencap -p > screenshotStep3.png`);
    // await driver.$('android=new UiSelector().resourceId("android:id/button1")').click();


    //Step4:
    //Sms code
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/verify_sms_code_input")').setValue('363731');

    //Permissions (use only new accounts and new emulator)
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/submit")').click();
    // await driver.$('android=new UiSelector().text("Allow")').click();
    // await driver.$('android= new UiSelector().text("Skip")').click();

    //Added info to user
    // const userName = 'Andriy';
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/registration_name")').setValue(userName);
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/register_name_accept")').click();




    // await driver.$('android=new UiSelector().text("Verify")').click();


    


    //get All Xml on the page
    // console.log(await driver.getPageSource());




    //Screenshot
    await new Promise((resolve) => setTimeout(resolve, 10000));
    executeADBCommand(`exec-out screencap -p > screenshotStep.png`);
  await driver.deleteSession();
}

runCalculatorTest();

function executeADBCommand(command) {
    try {
      const output = execSync(`docker exec --privileged androidContainer adb ${command}`);
      return output;
    } catch (error) {
      console.error('Ошибка выполнения команды ADB:', error);
      throw error;
    }
  }

//emulator @nexus -no-window -no-snapshot -noaudio -no-boot-anim -memory 648 -accel on -gpu off -camera-back none -scale -0.3 -cores 4



