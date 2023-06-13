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

    //Step2:
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/eula_accept")').click();

    //Step3:
    // await driver.$('android=new UiSelector().text("United States")').click();
    // await (await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/menuitem_search")')).click();
    // await driver.$('android= new UiSelector().resourceId("com.whatsapp:id/search_src_text")').setValue('Ukraine');
    // const country = await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/country_first_name")');
    // await country.click();
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/registration_phone")').setValue("688400671");
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/registration_submit")').click();
    // await driver.$('android=new UiSelector().resourceId("android:id/button1")').click();


    //Step4:
    //Sms code
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/verify_sms_code_input")').setValue('188964');

    //Permissions (use only new accounts)
    // await driver.$('android=new UiSelector().resourceId("com.whatsapp:id/submit")').click();
    // await driver.$('android=new UiSelector().text("Allow")').click();

    


    //get All Xml on the page
    // console.log(await driver.getPageSource());




    //Screenshot
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    executeADBCommand(`exec-out screencap -p > screenshotStep5.png`);
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



