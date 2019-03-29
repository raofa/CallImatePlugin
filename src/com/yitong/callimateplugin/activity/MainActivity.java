package com.yitong.callimateplugin.activity;

import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.widget.Button;

import com.yitong.callimateplugin.R;
import com.yitong.callimateplugin.constants.Constants;

public class MainActivity extends Activity{
	private Button btncallimateplugin;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
//		btncallimateplugin = (Button) findViewById(R.id.btn_callImatePlugin);
//		btncallimateplugin.setOnClickListener(this);
//
//	}
//
//	/*
//	 * 进入html页面点击调用Imate插件
//	 */
//	public void onClick(View v) {
		Intent intent = new Intent(MainActivity.this, Web.class);
		intent.putExtra(
				Constants.PAGE_WEB_URL,
				"file:///android_asset/www/index.html");
		startActivity(intent);

	}
	@Override
	public void onConfigurationChanged(Configuration newConfig) {    
	    super.onConfigurationChanged(newConfig);
	    // 检测屏幕的方向：纵向或横向
	    if (this.getResources().getConfiguration().orientation 
	            == Configuration.ORIENTATION_LANDSCAPE) {
	        //当前为横屏， 在此处添加额外的处理代码
	    }
	    else if (this.getResources().getConfiguration().orientation 
	            == Configuration.ORIENTATION_PORTRAIT) {
	        //当前为竖屏， 在此处添加额外的处理代码
	    }
	    //检测实体键盘的状态：推出或者合上    
	    if (newConfig.hardKeyboardHidden 
	            == Configuration.HARDKEYBOARDHIDDEN_NO){ 
	        //实体键盘处于推出状态，在此处添加额外的处理代码
	    } 
	    else if (newConfig.hardKeyboardHidden
	            == Configuration.HARDKEYBOARDHIDDEN_YES){ 
	        //实体键盘处于合上状态，在此处添加额外的处理代码
	    }
	}

}
