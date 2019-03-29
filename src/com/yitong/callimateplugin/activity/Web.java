package com.yitong.callimateplugin.activity;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.DroidGap;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.view.KeyEvent;

import com.yitong.callimateplugin.R;
import com.yitong.callimateplugin.constants.Constants;
import com.yitong.callimateplugin.logs.Logs;
//import com.yitong.utils.StringTools;

/**
 * webview页面（用来装载web页面�?
 * 
 */
@SuppressWarnings("deprecation")
@SuppressLint("ResourceAsColor")
public class Web extends DroidGap {
	public static CordovaWebView webView;
	private static String TAG = "Web";
	public static Activity activity;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		Logs.d(TAG, "onCreate");
		super.onCreate(savedInstanceState);
		// 添加到activity管理集合
//		ActivityTack.getInstanse().addActivity(this);
		activity = this;
		super.init();
		super.clearCache();
		super.appView.clearView();
		this.appView.setBackgroundResource(R.drawable.main_bg);// 设置背景图片
		super.setIntegerProperty("splashscreen", R.drawable.main_bg); // 设置闪屏背景图片
//		String web_url = getIntent().getStringExtra(Constants.PAGE_WEB_URL);
		String web_url = "file:///android_asset/www/index.html";
//		if (StringTools.isNotEmpty(web_url)) {
//			super.loadUrl(web_url, 3000); // 经过测试3000毫秒比较合�?
			super.loadUrl(web_url, 2300);
			webView = appView;
//		}
	}

	@Override
	public void onDestroy() {
		Logs.syso("Web onDestroy");
		// 删除集合存储记录
//		ActivityTack.getInstanse().removeActivity(this);
		super.onDestroy();
	}

	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		if (keyCode == KeyEvent.KEYCODE_BACK) {
			Logs.syso("当前web页面被finish掉了");
			finish();
			return true;
		} else {
			return super.onKeyDown(keyCode, event);
		}
	}
}
