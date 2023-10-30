//
//  RCOther.m
//  ReactNative
//
//  Created by itc on 30/10/2023.
//

#import "RCOther.h"
#import <React/RCTLog.h>

@implementation RCOther

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(doSomething:(NSString *)message)
{
  RCTLogInfo(@"Doing something: %@", message);
}

RCT_EXPORT_METHOD(getData:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
  // Simulate fetching data
  NSArray *data = @[@"Item 1", @"Item 2", @"Item 3"];
  resolve(data);
}

@end

