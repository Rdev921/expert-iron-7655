import {Link as RouterLink} from 'react-router-dom'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
           
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <RouterLink to="/">

            <Text
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
             Home
            </Text>
            </RouterLink>

            <RouterLink to="/products">
            <Text
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
             Products
            </Text>
            </RouterLink>

            <RouterLink to="/login">

            <Text
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
             Login
            </Text>
            </RouterLink> 

            <RouterLink to="/register">

            <Text
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
             Register
            </Text>
            </RouterLink>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    // return (
    //   <Stack direction={'row'} spacing={4}>
    //     {NAV_ITEMS.map((navItem) => (
    //       <Box key={navItem.label}>
    //         <Popover trigger={'hover'} placement={'bottom-start'}>
    //           <PopoverTrigger>
    //             <Link
    //               p={2}
    //               href={navItem.href ?? '#'}
    //               fontSize={'sm'}
    //               fontWeight={500}
    //               color={linkColor}
    //               _hover={{
    //                 textDecoration: 'none',
    //                 color: linkHoverColor,
    //               }}>
    //               {navItem.label}
    //             </Link>
    //           </PopoverTrigger>
  
    //           {navItem.children && (
    //             <PopoverContent
    //               border={0}
    //               boxShadow={'xl'}
    //               bg={popoverContentBgColor}
    //               p={4}
    //               rounded={'xl'}
    //               minW={'sm'}>
    //               <Stack>
    //                 {navItem.children.map((child) => (
    //                   <DesktopSubNav key={child.label} {...child} />
    //                 ))}
    //               </Stack>
    //             </PopoverContent>
    //           )}
    //         </Popover>
    //       </Box>
    //     ))}
    //   </Stack>
    // );
  };
  
  
//   const MobileNav = () => {
//     return (
//       <Stack
//         bg={useColorModeValue('white', 'gray.800')}
//         p={4}
//         display={{ md: 'none' }}>
//         {NAV_ITEMS.map((navItem) => (
//           <MobileNavItem key={navItem.label} {...navItem} />
//         ))}
//       </Stack>
//     );
//   };
  
 
  
 
  
 