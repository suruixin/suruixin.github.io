/*
Navicat MySQL Data Transfer

Source Server         : srx
Source Server Version : 50720
Source Host           : localhost:3302
Source Database       : server

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-05-04 18:14:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '前言', '123');
INSERT INTO `article` VALUES ('2', '前言', '456');
INSERT INTO `article` VALUES ('3', '前言', '456');
INSERT INTO `article` VALUES ('4', '前言', '456');
INSERT INTO `article` VALUES ('5', '前言', '456');
INSERT INTO `article` VALUES ('6', '前言', '456');
INSERT INTO `article` VALUES ('7', '前言', '456');
INSERT INTO `article` VALUES ('8', 'title', 'asd/n     sad');
INSERT INTO `article` VALUES ('9', '写在前面', '    日期：2018/4/27\n    这个博客的成立是个意外，为什么说是意外呢！因为今天想这整理下github的东西，然后想着把github上的数据备份下项目栏目清一下，结果两个月的记录都没了，好吧，本来这个博客地址也是要清除的，看到这个结果后，果断放弃了，虽然Commits写的很乱。。。');
