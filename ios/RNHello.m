//
//  RNHello.m
//  ReactNative
//
//  Created by itc on 30/10/2023.
//

#import "RNHello.h"
#import <React/RCTLog.h>

@implementation RNHello

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  callback(@[[NSNull null], @"Hello There Native Module From iOS"]);
}

@end

