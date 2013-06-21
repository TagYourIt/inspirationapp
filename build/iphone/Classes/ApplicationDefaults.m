/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"h67EgXziM5ariEcoZESqcW6oiisWmHrS"] forKey:@"acs-oauth-secret-development"];
	[_property setObject:[TiUtils stringValue:@"gl9EClmBmkNsYnwUIOci2TivAQXaI8JD"] forKey:@"acs-oauth-key-development"];
	[_property setObject:[TiUtils stringValue:@"ON5k84r3mhT2IgNp1bZBR5cIBXYEwVbL"] forKey:@"acs-api-key-development"];
	[_property setObject:[TiUtils stringValue:@"5t1MyJma6JgjiOScBvVrvWheewJelNFq"] forKey:@"acs-oauth-secret-production"];
	[_property setObject:[TiUtils stringValue:@"a1KNAWNLWD4opVZPBM9mOzlEEu2fsQmo"] forKey:@"acs-oauth-key-production"];
	[_property setObject:[TiUtils stringValue:@"jcNfh7rxibWChzr3H9N13fbDVujc0LMB"] forKey:@"acs-api-key-production"];
	[_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];
	return _property;
}

+ (NSDictionary*) launchUrl {
    static BOOL launched = NO;
    if (!launched) {
        launched = YES;
        return nil;
    } else { return nil;}
}
 
@end